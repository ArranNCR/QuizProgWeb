import { Component } from '@angular/core';

@Component({
    selector: 'app-server', // .app-server (untuk class selector), [app-server] (untuk property selector), app-server (untuk tag property)
    templateUrl: './server.component.html',
    // styleUrls: ['./server.component.css']
    styles:[`
        .online{
            color:white;
        }
    `]
})

export class ServerComponent {
    serverID:number = 13;
    serverStatus = 'offline';

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}