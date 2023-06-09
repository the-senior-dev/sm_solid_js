class UserValidator {
  static validate(userData) {
    // Validate user data
    return validateUserData(userData);
  }
}

class UserDatabase {
  static async saveUser(userData) {
    // Save user to database
    const db = getDatabaseConnection();
    await db.collection("users").insertOne(userData);
  }
}

class UserEmailService {
  static async sendWelcomeEmail(email) {
    // Send a welcome email
    const emailService = new EmailService();
    await emailService.sendWelcomeEmail(email);
  }
}

class User {
  constructor(userData) {
    this.userData = userData;
  }

  async register() {
    // Validate user data
    if (!UserValidator.validate(this.userData)) {
      throw new Error("Invalid user data");
    }

    // Save user to database
    await UserDatabase.saveUser(this.userData);

    // Send a welcome email
    await UserEmailService.sendWelcomeEmail(this.userData.email);
  }
}
