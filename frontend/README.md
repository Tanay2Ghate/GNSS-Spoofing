# 🛫 GNSS Spoofing Detection System (Airplane ML Project)

## 📌 Project Overview
This project detects whether an airplane GNSS signal is **spoofed or authentic** using Machine Learning.  
It uses synthetic GNSS data and predicts anomalies in signal behavior to identify spoofing attacks in real time.

---

## ⚙️ Tech Stack
- Python 🐍
- Scikit-learn / TensorFlow (ML Model)
- Pandas & NumPy (Data Processing)
- Flask (Backend API)
- React (Frontend UI)

---

## 🧠 How It Works
1. Input GNSS signal data (latitude, longitude, speed, time, etc.)
2. Preprocessing of data (cleaning + feature extraction)
3. ML model analyzes patterns
4. System predicts:
   - ✅ Normal Signal  
   - ❌ Spoofed Signal

---

## 💻 Sample Python Code

```python
import numpy as np
from sklearn.ensemble import RandomForestClassifier

# Sample synthetic dataset
X = [[1, 0.5, 120], [0, 0.2, 80], [1, 0.6, 130]]
y = [0, 1, 0]  # 0 = normal, 1 = spoofed

# Train model
model = RandomForestClassifier()
model.fit(X, y)

# Prediction
test_data = [[1, 0.55, 125]]
result = model.predict(test_data)

if result[0] == 1:
    print("⚠️ Spoofing Detected")
else:
    print("✅ Signal is Safe")
