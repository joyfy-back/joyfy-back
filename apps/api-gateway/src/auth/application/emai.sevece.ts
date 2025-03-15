import { Injectable } from "@nestjs/common";
import * as nodemailer from 'nodemailer';
import { AuthRepository } from "../infrastructure/auth.repository";
import { EmailConfirmationWithUser, UserMapOutput } from "../type/auth.type";
import { Result } from "apps/api-gateway/generalTypes/errorResponseType";
import { User } from "@prisma/client";



@Injectable()
export class EmailServece {
    constructor(protected authRepository: AuthRepository) { }

    async sendEmail(userCode: string, email: string, recoverePasswordCode?: string) {
        const transporter = nodemailer.createTransport({
            service: "gmail",

            auth: {
                user: "testestuser22@gmail.com",
                pass: "hmoi odon lzcv rbgc",
            },
        });

        if (recoverePasswordCode) {
            const info = await transporter.sendMail({
                from: "alida", // sender address
                to: email, // list of receivers
                subject: "Hello ✔", // Subject line
                //url нужно уточнить у fronta 
                html: `
            <h1>Thank for your registration</h1>
            <p>To finish password recovery please follow the link below:
              <a href='https://somesite.com/password-recovery?recoveryCode=${recoverePasswordCode}'>recovery password</a>
          </p>`,
            });

            return info;
        }
        const info = await transporter.sendMail({
            from: "alida", // sender address
            to: email, // list of receivers
            subject: "Hello ✔", // Subject line
            //url нужно уточнить у fronta 
            html: `
          <h1>Thank for your registration</h1>
          <p>To finish registration please follow the link below:
              <a href='https://somesite.com/confirm-email?code=${userCode}'>complete registration</a>
          </p>`,
        });

        return info;
    }

    async confirmEmail(code: string): Promise<Result> {
        // Step 1: Find email confirmation by code
        const emailConfirmationResult = await this.authRepository.findUserByConfirEmail(code);

        // If confirmation is not found or already confirmed, return an error
        if (!emailConfirmationResult.success || emailConfirmationResult.data[0].isConfirmed) {
            return {
                success: false,
                message: 'Email not confirmed or already confirmed',
                data: [],
            };
        }

        const emailConfirmation = emailConfirmationResult.data[0];

        // Step 2: Check if the confirmation code is valid and not expired
        const expirationDate = new Date(emailConfirmation.expirationDate);
        const isCodeValid = emailConfirmation.confirmationCode === code && expirationDate > new Date();

        if (!isCodeValid) {
            return {
                success: false,
                message: 'Invalid or expired confirmation code',
                data: [],
            };
        }

        // Step 3: Update the confirmation status
        const isUpdated = await this.authRepository.updateConfirmation(emailConfirmation.userId);

        if (!isUpdated.success) {
            return {
                success: false,
                message: 'Failed to update confirmation status',
                data: [],
            };
        }

        // Step 4: Successful confirmation
        return {
            success: true,
            message: 'Email confirmed successfully',
            data: [],
        };
    }

}