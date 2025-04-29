# IBAN Validator Input Component

This is a reusable React Native component that allows users to enter a valid Turkish IBAN number. It provides real-time validation and formatting while giving feedback for incorrect input.

## 🚀 Features

- Accepts only IBANs starting with **"TR"**
- Automatically inserts a space every 4 characters
- Displays error message for invalid IBANs (e.g., wrong start, incorrect characters, wrong length)
- Removes error message automatically on valid input
- Character limit and keyboard type configured
- Optimized UX with auto-capitalization and masked input

## 📦 Installation
```bash
git clone https://github.com/Enver-Onur-Cogalan/IBAN-Validator.git
cd IBANValidator
yarn install
yarn start
```

## 📱 Usage

```js
import IBANInput from './components/IBANInput';

export default function App() {
  return (
    <SafeAreaView>
      <IBANInput />
    </SafeAreaView>
  );
}
```

## 📁 File Structure

```
components/
└── IBANInput.js
```

## 🧠 Validation Logic
- Only uppercase letters and digits allowed
- TR must be the first two characters
- Input must be exactly 26 characters (excluding spaces)
- Regex is used to enforce character rules

## ✅ Example
**Correct input:**
```
TR12 3456 7890 1234 5678 9012 34
```
**Invalid input:**
- tr123456... → lowercase not allowed
- DE123456... → not starting with TR
- TR123456ABCD###... → symbols not allowed

## 📦 Technologies Used
- React Native
- useState hook
- Regex based formatting

## ✍️ Author
Created with 💙 by Enver Onur Çoğalan

GitHub: https://github.com/Enver-Onur-Cogalan
