import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ToDoItemServiceBase } from "./base/toDoItem.service.base";

@Injectable()
export class ToDoItemService extends ToDoItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
