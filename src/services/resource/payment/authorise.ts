import Client from "../../../client";
import Service from "../../../service";
import Resource from "../../resource";

class Authorise extends Resource {
    public constructor(service: Service) {
        super(
            service,
            `${service.client.config.paymentEndpoint}/${Client.PAYMENT_API_VERSION}/authorise`,
        );
    }
}

export default Authorise;