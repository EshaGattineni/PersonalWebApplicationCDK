import { Construct } from 'constructs';
import { Table, AttributeType, BillingMode, ITable } from 'aws-cdk-lib/aws-dynamodb';

interface CustomerInfoTableProps {
    stageName: string;
}

export class CustomerInfoTable extends Construct {
    public readonly table: ITable;

    constructor(scope: Construct, id: string, props: CustomerInfoTableProps) {
        super(scope, id);

        this.table = new Table(this, 'Resource', {
            tableName: `CustomerInfoTable-${props.stageName}`,
            partitionKey: { name: 'customerId', type: AttributeType.STRING },
            billingMode: BillingMode.PAY_PER_REQUEST,
        });
    }
}