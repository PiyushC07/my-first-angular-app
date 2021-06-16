import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  serverEdit = '';
  editOption = false;
  servers: any = [];
  allowServer = false;
  serverId = 10;
  serverName = 'testserver';
  constructor() {
  }

  ngOnInit(): void {}

  onCreateServer() {
    if (this.serverName !== '') {
      this.servers.push(this.serverName);
      console.log(this.servers);
      this.serverName = '';
    }
  }
  onRemoveServer(server: String) {
    this.servers.pop(server);
    console.log(this.servers);
  }

  onEditServer(server: String) {
    var index = this.servers.indexOf(server);
    this.servers[index] = this.serverEdit;
    console.log(this.servers);
    this.editOption = false;
  }
}
