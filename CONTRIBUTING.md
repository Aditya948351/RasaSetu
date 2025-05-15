
# 🤝 Contributing to RasaSetu

Welcome to the **RasaSetu** project! 🎉  
We're thrilled that you're considering contributing to this initiative that bridges intelligent voice and text assistants with real-world integration.

---

## 📌 Table of Contents
1. [Code of Conduct](#-code-of-conduct)
2. [How Can I Contribute?](#-how-can-i-contribute)
3. [Getting Started](#-getting-started)
4. [Branching Strategy](#-branching-strategy)
5. [Code Style Guidelines](#-code-style-guidelines)
6. [Commit Message Convention](#-commit-message-convention)
7. [Pull Request Process](#-pull-request-process)
8. [Need Help?](#-need-help)

---

## 📜 Code of Conduct

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) before participating. We are committed to fostering a welcoming and respectful environment.

---

## 🚀 How Can I Contribute?

Here are a few ways you can get involved:

- 🐞 **Report Bugs** – Use [GitHub Issues](../../issues) to flag problems.
- ✨ **Suggest Features** – Recommend improvements via issues.
- 🛠 **Fix Bugs** – Help squash bugs listed in open issues.
- 📚 **Improve Documentation** – Clarify, fix typos, or enhance readability.
- 🧪 **Write Tests** – Increase test coverage and stability.
- 🤖 **Enhance AI Logic** – Improve Rasa NLU/Custom Actions/Dialog Management.

---

## 🛠 Getting Started

1. **Fork** the repository  
2. **Clone** your fork  
   ```bash
   git clone https://github.com/<your-username>/RasaSetu.git
   cd RasaSetu
   ```
3. **Install requirements**  
   ```bash
   pip install -r requirements.txt
   ```
4. **Run the Rasa server**  
   ```bash
   rasa train
   rasa run
   rasa run actions
   ```

---

## 🌱 Branching Strategy

- **`main`** → Stable production branch  
- **`dev`** → Development and staging branch  
- Feature branches should follow the format:
  ```
  feature/<your-feature-name>
  bugfix/<short-description>
  ```

---

## 🎨 Code Style Guidelines

- Follow **PEP8** for Python code.
- Use clear and descriptive names.
- Include **docstrings** for all functions and classes.
- Format code using tools like `black` or `flake8`.

---

## 💬 Commit Message Convention

Structure your commit messages like:

```
<type>: <short summary>

<optional detailed explanation>
```

Types include: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`.

Example:
```
feat: add fallback action handler
```

---

## 🔁 Pull Request Process

1. Create a new branch from `dev`.
2. Make your changes.
3. Ensure the code is formatted and tests pass.
4. Push and submit a pull request to the `dev` branch.
5. Fill in the PR template and wait for review.

---

## 📞 Need Help?

Open a [discussion](../../discussions) or reach out via email at:  
📧 **adityadeveloper948351@gmail.com**

Let’s build something powerful together. 🚀  
Thank you for contributing to **RasaSetu**! 🙌
