# Security Policy

## Supported Versions

We take security seriously and will provide security updates for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please report it responsibly:

### 🔐 Private Disclosure

**Please do NOT create a public GitHub issue for security vulnerabilities.**

Instead, please:

1. **Email**: Send details to [iangelmanuel02@gmail.com](mailto:iangelmanuel02@gmail.com)
2. **Subject Line**: Use "SECURITY: [Brief Description]"
3. **Include**:
   - Description of the vulnerability
   - Steps to reproduce the issue
   - Potential impact
   - Suggested fix (if available)

### 📋 Information to Include

When reporting a vulnerability, please include:

- **Type of vulnerability** (XSS, CSRF, injection, etc.)
- **Location** (file path, URL, etc.)
- **Step-by-step reproduction**
- **Proof of concept** (if applicable)
- **Impact assessment**
- **Suggested mitigation**

### ⏱️ Response Timeline

- **Initial Response**: Within 48 hours
- **Status Update**: Within 5 business days
- **Fix Timeline**: Depends on severity
  - **Critical**: 24-72 hours
  - **High**: 1-2 weeks
  - **Medium**: 2-4 weeks
  - **Low**: Next release cycle

### 🏆 Recognition

We appreciate security researchers and will:

- Acknowledge your contribution (with permission)
- Provide credit in our security advisories
- Include your name in our Hall of Fame (optional)

## Security Best Practices

This project follows security best practices including:

### 🛡️ Development Security

- **Dependency Updates**: Regular security updates
- **Code Review**: All changes reviewed before merge
- **Static Analysis**: ESLint with security rules
- **Input Validation**: All user inputs validated
- **HTTPS Only**: All communications encrypted

### 🌐 Web Security Headers

- **Content Security Policy (CSP)**
- **X-Frame-Options**
- **X-Content-Type-Options**
- **Referrer-Policy**
- **Permissions-Policy**

### 📦 Dependencies

- **Automated Scanning**: GitHub Dependabot enabled
- **Regular Updates**: Dependencies updated monthly
- **Vulnerability Monitoring**: Continuous monitoring
- **Minimal Dependencies**: Only necessary packages

## Security Features

### 🔍 Built-in Security

- **No Server-Side Code**: Static site generation
- **No Database**: No SQL injection risks
- **No User Authentication**: No credential management
- **Contact Form**: Validated and sanitized
- **Static Assets**: Served with security headers

### 🚨 Monitoring

- **GitHub Security Advisories**
- **Dependabot Alerts**
- **npm audit**
- **Regular Security Reviews**

## Disclosure Policy

### 📢 Public Disclosure Timeline

1. **Day 0**: Vulnerability reported privately
2. **Day 1-2**: Initial response and triage
3. **Day 3-7**: Investigation and fix development
4. **Day 8-14**: Testing and validation
5. **Day 15+**: Public disclosure (after fix deployment)

### 🏅 Hall of Fame

We recognize security researchers who have helped improve our security:

_No reports yet - be the first to help us improve!_

## Contact Information

### 👨‍💻 Security Team

- **Primary Contact**: Angel De La Torre
- **Email**: [iangelmanuel02@gmail.com](mailto:iangelmanuel02@gmail.com)
- **GitHub**: [@iAngelManuel](https://github.com/iAngelManuel)

### 📱 Emergency Contact

For critical vulnerabilities that pose immediate risk:

- **Email**: [iangelmanuel02@gmail.com](mailto:iangelmanuel02@gmail.com)
- **Subject**: "URGENT SECURITY - [Brief Description]"

## Additional Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [GitHub Security Advisories](https://github.com/advisories)
- [Node.js Security Guidelines](https://nodejs.org/en/security/)
- [npm Security](https://docs.npmjs.com/security)

---

Thank you for helping keep this project and its users safe! 🙏

_Last updated: August 6, 2025_
