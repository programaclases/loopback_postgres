import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Tareas} from '../models';
import {TareasRepository} from '../repositories';

export class TareasController {
  constructor(
    @repository(TareasRepository)
    public tareasRepository : TareasRepository,
  ) {}

  @post('/tareas', {
    responses: {
      '200': {
        description: 'Tareas model instance',
        content: {'application/json': {schema: getModelSchemaRef(Tareas)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tareas, {
            title: 'NewTareas',
            
          }),
        },
      },
    })
    tareas: Tareas,
  ): Promise<Tareas> {
    return this.tareasRepository.create(tareas);
  }

  @get('/tareas/count', {
    responses: {
      '200': {
        description: 'Tareas model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Tareas) where?: Where<Tareas>,
  ): Promise<Count> {
    return this.tareasRepository.count(where);
  }

  @get('/tareas', {
    responses: {
      '200': {
        description: 'Array of Tareas model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Tareas, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Tareas) filter?: Filter<Tareas>,
  ): Promise<Tareas[]> {
    return this.tareasRepository.find(filter);
  }

  @patch('/tareas', {
    responses: {
      '200': {
        description: 'Tareas PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tareas, {partial: true}),
        },
      },
    })
    tareas: Tareas,
    @param.where(Tareas) where?: Where<Tareas>,
  ): Promise<Count> {
    return this.tareasRepository.updateAll(tareas, where);
  }

  @get('/tareas/{id}', {
    responses: {
      '200': {
        description: 'Tareas model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Tareas, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Tareas, {exclude: 'where'}) filter?: FilterExcludingWhere<Tareas>
  ): Promise<Tareas> {
    return this.tareasRepository.findById(id, filter);
  }

  @patch('/tareas/{id}', {
    responses: {
      '204': {
        description: 'Tareas PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tareas, {partial: true}),
        },
      },
    })
    tareas: Tareas,
  ): Promise<void> {
    await this.tareasRepository.updateById(id, tareas);
  }

  @put('/tareas/{id}', {
    responses: {
      '204': {
        description: 'Tareas PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() tareas: Tareas,
  ): Promise<void> {
    await this.tareasRepository.replaceById(id, tareas);
  }

  @del('/tareas/{id}', {
    responses: {
      '204': {
        description: 'Tareas DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.tareasRepository.deleteById(id);
  }
}
