import { Injectable } from "@nestjs/common";
import * as nodemailer from 'nodemailer';
import { AuthRepository } from "../infrastructure/auth.repository";
import { UserMapOutput } from "../type/auth.type";
import { Result } from "apps/api-gateway/generalTypes/errorResponseType";
import { User } from "@prisma/client";



@Injectable()
export class EmailServece {
    constructor(protected authRepository:AuthRepository) { }

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
    // async confirmEmail(code: string) {

    //     const user: Result<User> = await this.authRepository.findUserByConfirEmail(code)



    //     if (!user.success) {
    //         return null;
    //     }

    //     if (user.data[0].isConfirmed) {
    //         return null
    //     }

    //     const expirationDate = new Date(user.data[0].expirationDate);

    //     if (user.data[0].confirmationCode === code && expirationDate > new Date()) {
    //         const result = await this.authRepository.updateConfirmation(user.user.userId);

    //         return result;
    //     }

    //     return null;
    // }


}