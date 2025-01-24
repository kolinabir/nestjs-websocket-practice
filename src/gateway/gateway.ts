import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';

@WebSocketGateway({})
export class MyGateway {
  @SubscribeMessage('newMessage')
  handleNewMessage(@MessageBody() body: any) {
    console.log('New message');
    console.log(body);
  }
}
