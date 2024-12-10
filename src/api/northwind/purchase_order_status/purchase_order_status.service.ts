import { Injectable } from '@nestjs/common';
import { CreatePurchaseOrderStatusDto } from './dto/create-purchase_order_status.dto';
import { UpdatePurchaseOrderStatusDto } from './dto/update-purchase_order_status.dto';

@Injectable()
export class PurchaseOrderStatusService {
  create(createPurchaseOrderStatusDto: CreatePurchaseOrderStatusDto) {
    return 'This action adds a new purchaseOrderStatus';
  }

  findAll() {
    return `This action returns all purchaseOrderStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} purchaseOrderStatus`;
  }

  update(id: number, updatePurchaseOrderStatusDto: UpdatePurchaseOrderStatusDto) {
    return `This action updates a #${id} purchaseOrderStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} purchaseOrderStatus`;
  }
}
