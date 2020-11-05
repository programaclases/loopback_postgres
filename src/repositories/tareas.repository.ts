import {DefaultCrudRepository} from '@loopback/repository';
import {Tareas, TareasRelations} from '../models';
import {DsPostgresDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TareasRepository extends DefaultCrudRepository<
  Tareas,
  typeof Tareas.prototype.id,
  TareasRelations
> {
  constructor(
    @inject('datasources.DsPostgres') dataSource: DsPostgresDataSource,
  ) {
    super(Tareas, dataSource);
  }
}
