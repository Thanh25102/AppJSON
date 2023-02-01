import { MessageRepo } from './messages.repo';

export class MesssageService {
  messageRepo: MessageRepo;
  constructor() {
    this.messageRepo = new MessageRepo();
  }

  findOne(id: string) {
    return this.messageRepo.findOne(id);
  }
  findAll() {
    return this.messageRepo.findAll();
  }
  create(content: string) {
    return this.messageRepo.create(content);
  }
}
