import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {ClientModel} from '../client/client.model';
import {HttpClient} from '@angular/common/http';
import {CommandModel} from './commande.model';
import {CommandDtoModel} from './commandeDto.model';





@Injectable()
export class CommandService {
  apiUrl = environment.apiUrl;
  commandEndpoint = 'commands/';
  commandCreateEndpoint = 'command/';
  commandUpdateEndpoint = 'commands/';

  constructor(private http: HttpClient) { }


  getCommandList(): Observable<CommandDtoModel[]> {
    return this.http.get<CommandDtoModel[]>(this.apiUrl + this.commandEndpoint);

  }


  removeCommand(commandCode): Observable<any>{
    return this.http.delete<any>(this.apiUrl + this.commandEndpoint + commandCode);
  }

  createCommand(command: CommandModel){
    return this.http.post<ClientModel[]>(this.apiUrl + this.commandCreateEndpoint, command);

  }


  getCommandByCode(commandCode: string): Observable<CommandDtoModel>{
    return this.http.get<CommandDtoModel>(this.apiUrl + this.commandEndpoint + commandCode);
  }

  updateCommand(changedCommand: CommandDtoModel, commandCode: string): Observable<any>{
    return this.http.put<any>(this.apiUrl + this.commandUpdateEndpoint + commandCode, changedCommand);

  }

}
