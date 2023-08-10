declare namespace Ajax {
    // ajax外壳
    export interface AjaxResponse {
        data: AjaxResponse
    }

    // 接口payload
    export interface AjaxResponse {
        code: number;
        result: any;
        message?: string;
    }
}