export type emailConfirmationType = {
    confirmationCode: string,
    expirationDate: Date,
    isConfirmed: boolean,

}

export type UserType = {
    username: string,
    email: string,
    passwordHash: string,
    emailConfirmation: emailConfirmationType,
    agreeToTerms: boolean
}

export type UserMapOutput = {
    userId: string
    username: string,
    email: string,
    agreeToTerms: boolean,
    createdAt: Date,
    updatedAt: Date,
    isConfirmed: boolean
}
