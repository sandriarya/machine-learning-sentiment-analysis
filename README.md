Analisis sentimen dilakukan untuk mengidentifikasi kecenderungan opini publik yang terdapat pada komentar Instagram mengenai performa Timnas Indonesia.

Setiap komentar diklasifikasikan ke dalam tiga kategori sentimen:

* 🟢 **Positif**
* ⚪ **Netral**
* 🔴 **Negatif**

## 🧠 Metode yang Digunakan

### 1. Preprocessing
Tahap preprocessing dilakukan untuk membersihkan dan mempersiapkan data teks sebelum digunakan dalam proses Machine Learning.
Tahapan yang digunakan meliputi:
* **Cleaning**
* **Case Folding**
* **Tokenizing**
* **Normalization**
* **Stopword Removal**

### 2. TF-IDF
TF-IDF digunakan untuk mengubah teks menjadi representasi numerik berdasarkan tingkat kepentingan suatu kata dalam dokumen.

### 3. Multinomial Naïve Bayes
Algoritma **Multinomial Naïve Bayes** digunakan sebagai model klasifikasi untuk menentukan kategori sentimen komentar.
Model dilatih menggunakan fitur hasil transformasi TF-IDF.

Konfigurasi model:

```python
MultinomialNB(alpha=0.1)
```

Model yang telah dilatih disimpan dalam format `.pkl` sehingga dapat digunakan kembali tanpa melakukan proses training dari awal.

---

## 📊 Evaluasi Model
Performa model dievaluasi menggunakan beberapa metrik:
* **Accuracy**
* **Precision**
* **Recall**
* **F1-Score**
* **Confusion Matrix**
* **Classification Report**

Evaluasi dilakukan terhadap tiga kelas sentimen:

| Kelas | Sentimen |
| ----- | -------- |
| 0     | Negatif  |
| 1     | Netral   |
| 2     | Positif  |

> Nilai evaluasi yang ditampilkan pada repository mengikuti hasil eksperimen/model yang digunakan dalam penelitian.

Project ini dikembangkan menggunakan:

| Teknologi               | Kegunaan                           |
| ----------------------- | ---------------------------------- |
| Python                  | Bahasa pemrograman utama           |
| Pandas                  | Pengolahan dataset                 |
| Scikit-learn            | TF-IDF dan Machine Learning        |
| Multinomial Naïve Bayes | Algoritma klasifikasi              |
| Sastrawi                | Pemrosesan teks Bahasa Indonesia   |
| Jupyter Notebook        | Eksperimen dan pengembangan model  |
| Flask                   | Backend aplikasi web               |
| HTML                    | Struktur halaman                   |
| CSS                     | Tampilan antarmuka                 |
| JavaScript              | Interaksi pada dashboard           |
| Excel                   | Penyimpanan dan pengolahan dataset |

---

## 🚀 Instalasi

### 1. Clone Repository

```bash
git clone https://github.com/USERNAME/skripsisentimen.git
```

Masuk ke folder project:

```bash
cd skripsisentimen
```

### 2. Membuat Virtual Environment

```bash
python -m venv venv
```

Aktifkan virtual environment pada Windows:

```bash
venv\Scripts\activate
```

### 3. Install Dependency

Install library yang dibutuhkan:

```bash
pip install -r requirements.txt
```

### 4. Menjalankan Aplikasi

Jalankan Flask:

```bash
python app.py
```

Kemudian buka browser dan akses:

```text
http://127.0.0.1:5000
```
## 📓 Notebook
Repository menyediakan notebook untuk mendokumentasikan proses pengembangan Machine Learning.

### `1_preprocessing.ipynb`
Digunakan untuk:
* Membaca dataset komentar
* Cleaning data
* Case folding
* Tokenizing
* Normalization
* Stopword removal
* Menyimpan hasil preprocessing

### `2_training_model.ipynb`
Digunakan untuk:
* Membaca data yang telah diproses
* Membagi data training dan testing
* Melakukan ekstraksi fitur TF-IDF
* Melatih Multinomial Naïve Bayes
* Melakukan prediksi
* Menghitung performa model
* Menyimpan model dan TF-IDF

### `3_cek.ipynb`
Digunakan untuk melakukan pengecekan terhadap data, fitur, maupun hasil model.
---

## 📈 Output
Project menghasilkan beberapa output analisis, antara lain:

* Distribusi data sentimen
* Hasil preprocessing
* Hasil prediksi sentimen
* Classification Report
* Confusion Matrix
* Word Cloud berdasarkan kelas sentimen
* Dashboard hasil analisis
* Prediksi sentimen komentar baru

---

## 🌐 Dashboard

Aplikasi Flask menyediakan antarmuka untuk menampilkan hasil analisis sentimen secara visual.

Dashboard dapat digunakan untuk melihat informasi seperti:

* Jumlah komentar berdasarkan sentimen
* Distribusi sentimen
* Hasil klasifikasi
* Visualisasi evaluasi model
* Prediksi sentimen komentar baru
