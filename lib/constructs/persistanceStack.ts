import { Construct } from 'constructs';
import { Table, AttributeType, BillingMode, ITable } from 'aws-cdk-lib/aws-dynamodb';

export class CustomerInfoTable extends Construct {
    // expose the table so other parts of the stack can reference it
    public readonly table: ITable;

    constructor(scope: Construct, id: string) {
        super(scope, id);

        this.table = new Table(this, 'Resource', {
            tableName: 'CustomerInfoTable',
            partitionKey: { name: 'customerId', type: AttributeType.STRING },
            billingMode: BillingMode.PAY_PER_REQUEST,
        });
    }
}