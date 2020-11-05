import {Entity, model, property} from '@loopback/repository';

@model()
export class Tareas extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
  })
  descripcion?: string;


  constructor(data?: Partial<Tareas>) {
    super(data);
  }
}

export interface TareasRelations {
  // describe navigational properties here
}

export type TareasWithRelations = Tareas & TareasRelations;
