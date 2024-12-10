import { Injectable } from '@nestjs/common';
import { CreatePurchaseOrderDetailDto } from './dto/create-purchase_order_detail.dto';
import { UpdatePurchaseOrderDetailDto } from './dto/update-purchase_order_detail.dto';

@Injectable()
export class PurchaseOrderDetailsService {
  create(createPurchaseOrderDetailDto: CreatePurchaseOrderDetailDto) {
    return 'This action adds a new purchaseOrderDetail';
  }

  findAll() {
    return `This action returns all purchaseOrderDetails`;
  }

  findOne(id: number) {
    return `This action returns a #${id} purchaseOrderDetail`;
  }

  update(id: number, updatePurchaseOrderDetailDto: UpdatePurchaseOrderDetailDto) {
    return `This action updates a #${id} purchaseOrderDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} purchaseOrderDetail`;
  }
}
