import {DefaultCrudRepository} from '@loopback/repository';
import {Usuarios, UsuariosRelations} from '../models';
import {DsPostgresDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UsuariosRepository extends DefaultCrudRepository<
  Usuarios,
  typeof Usuarios.prototype.id,
  UsuariosRelations
> {
  constructor(
    @inject('datasources.DsPostgres') dataSource: DsPostgresDataSource,
  ) {
    super(Usuarios, dataSource);
  }
}
