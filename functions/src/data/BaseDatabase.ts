import knex from "knex"
import Knex from "knex"

export abstract class BaseDatabase {

    protected resultPerPage: number = 10;

    protected tableNames = {
        user: "USUARIO",
        relation: 'RELACOES',
        group: 'GRUPO',
        pageEvent: 'EVENTO',
        page: 'PAGINA',
        pageLikes: 'CURTIDAS_PAGINA',
        post: 'POST',
        postLikes: 'CURTIDAS_POST'
      };


    private static connection: Knex | null = null

    protected getConnection(): Knex{
        if(!BaseDatabase.connection){
            BaseDatabase.connection = knex({
                client: "mysql",
                connection: {
                    host: process.env.DB_HOST,
                    port: parseInt(process.env.DB_PORT as string),
                    user: process.env.DB_USER,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_NAME,
                },
            })    
        }

        return BaseDatabase.connection
    }

    public static async destroyConnection(): Promise<void>{
        if(BaseDatabase.connection){
            await BaseDatabase.connection.destroy();
            BaseDatabase.connection = null
        }
    }
}
