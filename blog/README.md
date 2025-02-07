# ABAC in a React-Vite App

Welcome to this project where we explore **Policy Definition, Validation, and Enforcement** in an Attribute-Based Access Control (ABAC) system. 🎯

## Table of Contents 📖
1. [Overview 🚀](#overview-)
2. [Implementing Policy as Code ✍️](#implementing-policy-as-code-)
3. [Policy Management 🛠️](#policy-management-)
4. [Sample Policy (YAML Format) 📜](#sample-policy-yaml-format-)
5. [Workflow Overview 🔄](#workflow-overview-)
6. [Let's Get Started! 🚀](#lets-get-started-)
7. [Contributions & Feedback 💡](#contributions--feedback-)

## Overview 🚀

In a real-world setup, **Access Control Policies** should always reside on the backend. However, in this project, we emulate a Data Store to demonstrate how policies are defined and enforced on the frontend.

### Implementing Policy as Code ✍️

We define and manage policies using configuration files such as **YAML, JSON, or DSL**.

**Why?**

- ✅ Policies can be **version-controlled**.
- ✅ They can be **automatically enforced**.
- ✅ They provide **reliable access control** in dynamic environments.

### Policy Management 🛠️

- **Security Admins** author policies.
- **Policy Service** manages them.

### Sample Policy (YAML Format) 📜

```yaml
policies:
  - policyId: P001
    resource: Post
    action: view
    effect: allow
    conditions: '(resource.tag != "exclusive") || (resource.tag == "exclusive" && user.role == "premium user")'
  - policyId: P002
    resource: Post
    action: edit
    effect: allow
    conditions: 'resource.ownerId == user.id'
```

### Breakdown 🧐

- **policyId** → Unique identifier.
- **resource** → The type of resource (e.g., "Post").
- **action** → The operation allowed/denied (e.g., "edit").
- **effect** → Whether the action is **allowed** or **denied**.
- **conditions** → Logical rules to validate access.

💡 The conditions use **Google's Common Expression Language (CEL)** ([More about CEL](https://cel.dev/)).

- CEL is optimized for **high performance**, compiled once into an abstract syntax tree, and executes in **nanoseconds/microseconds**. ⚡

---

## Workflow Overview 🔄

Here’s how the policy validation works in our app:

![Workflow Implementation](/public/images/workflow.jpg)

1. **Fetching Policies** 📥

   - On app startup, policies are retrieved from the Policy Service using **RTK Queries** (Redux Toolkit Query), which automatically caches them.

2. **User Authentication** 🔑

   - After login, user attributes (e.g., role, department) are stored in the cache.
   - Session storage is used to persist session data (excluding sensitive info!).

3. **Policy Enforcement** 🛡️

   - At **policy enforcement points** (routes/components), our custom **permission hook** validates permissions.
   - It checks **policies, user attributes, resource details, and environment conditions** to determine access.

**Result:** ✅ Allow action or ❌ Deny access based on policy rules.

---

## Let's Get Started! 🚀

1. **Clone the Repository** 📂

   ```sh
   git clone https://github.com/ProgramKingAbel/ABAC.git
   cd ABAC/blog
   ```

2. **Install Dependencies** 📦

   ```sh
   npm install
   ```

3. **Run the App** ▶️

   ```sh
   npm run dev
   ```

Now you're ready to explore **policy-based access control** in React! 🎉

---

## Contributions & Feedback 💡

Feel free to contribute or share feedback to improve this project. PRs are welcome! 🚀

