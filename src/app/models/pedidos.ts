export interface Pedidos {
    id: string;
    cliente: string;
    endereco: any[];
    status: string;
    horas: string;
    horasEntrega: string;
    numeroPedido: string;
    Items: any[];
    subtotal: number;
    desconto: number;
    totalPreco: number;
    CustomerDelivery: string;
    pendente:  boolean;
    emProcesso: boolean;
    despachadp: boolean;
    quantidade: number;
    title: string;
    preco: number;
}