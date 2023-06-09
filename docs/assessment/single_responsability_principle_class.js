class User {
  constructor(userData) {
    this.userData = userData;
  }

  async register() {
    // Validate user data
    const isValid = validateUserData(this.userData);
    if (!isValid) {
      throw new Error("Invalid user data");
    }

    // Save user to database
    const db = getDatabaseConnection();
    await db.collection("users").insertOne(this.userData);

    // Send a welcome email
    const emailService = new EmailService();
    await emailService.sendWelcomeEmail(this.userData.email);
  }
}
