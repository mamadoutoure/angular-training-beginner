import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {ClientModel} from '../client/client.model';
import {HttpClient} from '@angular/common/http';
import {CommandModel} from './commande.model';
import {CommandDtoModel} from './commandeDto.model';





@Injectable({
  providedIn: 'root'
})


export class CommandService {
  apiUrl = environment.apiUrl;
  commandEndpoint = 'commands/';
  commandCreateEndpoint = 'save/command/';
  commandUpdateEndpoint = 'update/command/';

  constructor(private http: HttpClient) { }


  getCommandList(): Observable<CommandDtoModel[]> {
    return this.http.get<CommandDtoModel[]>(this.apiUrl + this.commandEndpoint);

  }

  createCommand(command: CommandModel){
    return this.http.post<ClientModel[]>(this.apiUrl + this.commandCreateEndpoint, command);

  }


  getCommandByCode(commandCode: string): Observable<CommandDtoModel>{
    return this.http.get<CommandDtoModel>(this.apiUrl + this.commandEndpoint + commandCode);
  }
}
