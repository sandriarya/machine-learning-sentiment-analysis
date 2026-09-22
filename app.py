from flask import Flask, render_template, request
import pandas as pd
import joblib

app = Flask(__name__)

# ==========================
# LOAD DATASET
# ==========================
df = pd.read_excel("dataset/label_manual.xlsx")

# ==========================
# LOAD MODEL
# ==========================
model = joblib.load("model/model_naive_bayes.pkl")
tfidf = joblib.load("model/tfidf.pkl")

# ==========================
# HITUNG STATISTIK
# ==========================
total_data = len(df)

jumlah_positif = (df["sentimen"] == "positif").sum()
jumlah_netral = (df["sentimen"] == "netral").sum()
jumlah_negatif = (df["sentimen"] == "negatif").sum()

persen_positif = round((jumlah_positif / total_data) * 100, 1)
persen_netral = round((jumlah_netral / total_data) * 100, 1)
persen_negatif = round((jumlah_negatif / total_data) * 100, 1)

# ==========================
# HASIL EVALUASI MODEL
# ==========================
accuracy = 80.40
precision = 80.17
recall = 80.40
f1_score = 80.16

# ==========================
# INSIGHT DASHBOARD
# ==========================
data_sentimen = {
    "Positif": jumlah_positif,
    "Netral": jumlah_netral,
    "Negatif": jumlah_negatif
}

sentimen_dominan = max(data_sentimen, key=data_sentimen.get)

persentase_tertinggi = max(
    persen_positif,
    persen_netral,
    persen_negatif
)

# ==========================
# DASHBOARD
# ==========================
@app.route("/")
def dashboard():

    return render_template(
    "dashboard.html",
    persen_positif=persen_positif,
    persen_netral=persen_netral,
    persen_negatif=persen_negatif,
    total_data=total_data,
    jumlah_positif=jumlah_positif,
    jumlah_netral=jumlah_netral,
    jumlah_negatif=jumlah_negatif,

    sentimen_dominan=sentimen_dominan,
    persentase_tertinggi=persentase_tertinggi,
    accuracy=accuracy,
    precision=precision,
    recall=recall,
    f1_score=f1_score
)


# ==========================
# PREDIKSI
# ==========================
@app.route("/prediksi", methods=["GET", "POST"])
def prediksi():

    hasil = None
    komentar = ""
    warna = ""
    emoji = ""

    if request.method == "POST":

        komentar = request.form["komentar"].strip()

        if komentar == "":
            return render_template(
                "prediksi.html",
                persen_positif=persen_positif,
                persen_netral=persen_netral,
                persen_negatif=persen_negatif,
                hasil=None,
                komentar="",
                warna="",
                emoji=""
            )

        vector = tfidf.transform([komentar])

        hasil = model.predict(vector)[0]

        if hasil == "positif":
            warna = "success"
            emoji = "😊"

        elif hasil == "netral":
            warna = "warning"
            emoji = "😐"

        else:
            warna = "danger"
            emoji = "😠"

    return render_template(
        "prediksi.html",
        persen_positif=persen_positif,
        persen_netral=persen_netral,
        persen_negatif=persen_negatif,
        hasil=hasil,
        komentar=komentar,
        warna=warna,
        emoji=emoji
    )
if __name__ == "__main__":
    app.run(debug=True)