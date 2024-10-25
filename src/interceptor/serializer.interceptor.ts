import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { map, Observable } from "rxjs";

export class SerializeInterceptor implements NestInterceptor{
    intercept(context: ExecutionContext, handler: CallHandler): Observable<any>{
        console.log('running before handler',context);

        return handler.handle().pipe(
            map((data:any)=>{
                console.log('running before response sent out',data)
            })
        );
    }
}