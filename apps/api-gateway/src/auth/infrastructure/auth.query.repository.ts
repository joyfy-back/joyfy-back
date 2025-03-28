import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../shared/prisma/prisma.service";
import { Result } from "libs/shared/types";
import { formatErrorMessage } from "../../shared/libs/format-error-message";



@Injectable()
export class AuthQueryRepository {
    constructor(protected prisma: PrismaService) { }

    async getSessions(userId: string): Promise<Result<any>> {
        try {
            const sessions = await this.prisma.deviceSessions.findMany({
                where: {
                    userId: userId,
                },
                select: {
                    deviceId: true,
                    ip: true,
                    lastActiveDate: true,
                    title: true,
                },
            });

            const mappedSessions = sessions.map((session) => ({
                ...session,
                lastActiveDate: new Date(session.lastActiveDate), // Конвертируем строку в Date
            }));

            return {
                success: true,
                message: 'successful query for sessions in db',
                data: mappedSessions

            };
        } catch (error) {
            console.error('Error fetching sessions:', error);

            return {
                success: false,
                message: formatErrorMessage(
                    error,
                    'failed database query',
                ),
                data: []
            }
        }
    }

    async getSessionById(deviceId: string) {
        try {
            const result = await this.prisma.deviceSessions.findUnique({
                where: {
                    deviceId: deviceId
                },
            });

            if (!result) {
                return {
                    success: false,
                    message: 'not found',
                    data: []
                };

            }
        } catch (error) {
            return {
                success: false,
                message: formatErrorMessage(
                    error,
                    'failed database query',
                ),
                data: []
            }
        }
    }

}
