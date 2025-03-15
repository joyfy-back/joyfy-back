import { User } from "@prisma/client";



export const userMapOutputModul = (items: User) => {
    return {
        userId: items.userId,
        username: items.username,
        email: items.email,
        agreeToTerms: items.agreeToTerms,
        createdAt: items.createdAt,
        updatedAt: items.updatedAt,
        isConfirmed: items.isConfirmed
    }
}