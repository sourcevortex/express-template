import { Request, Response } from 'express';
import {
  JsonController,
  UseBefore,
  Post,
  Get,
  Patch,
  Delete,
  Param,
  Body,
  Req,
  Res,
} from 'routing-controllers';
import AuthMiddleware from '@middleware/AuthMiddleware';
import CreateUserRequest from '@request/user/CreateUserRequest';
import UpdateUserRequest from '@request/user/UpdateUserRequest';
import Responses from '@builder/Responses';
import { whitelist } from '@config/validations';

@JsonController('/users')
@UseBefore(AuthMiddleware)
export default class UserController {
  /**
   * CRUD operations
   */

  @Post()
  public async create(@Body() req: CreateUserRequest, @Res() res: Response) {
    return Responses.Success('Not implemented yet', null);
  }

  @Get()
  public async getAll(@Req() req: Request, @Res() res: Response) {
    return Responses.Success('Not implemented yet', null);
  }

  @Get('/:id')
  public async getOne(@Param('id') id: string, @Res() res: Response) {
    return Responses.Success('Not implemented yet', null);
  }

  @Patch('/:id')
  public async update(
    @Param('id') id: string,
    @Body(whitelist) req: UpdateUserRequest,
    @Res() res: Response
  ) {
    return Responses.Success('Not implemented yet', null);
  }

  @Delete('/:id')
  public async delete(@Param('id') id: string, @Res() res: Response) {
    return Responses.Success('Not implemented yet', null);
  }
}
