import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MessageDTO } from './dto/messages.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  getMessages() {
    return "{'content':'Thanh'}";
  }

  @Post()
  createMessages(@Body() message: MessageDTO) {
    console.log(message);
  }

  @Get('/:id')
  getMessage(@Param('id') id: number) {}
}
