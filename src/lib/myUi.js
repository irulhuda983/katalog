import { Skeleton } from "@/components/ui/skeleton";
import { InputGroup } from "@/components/ui/input-group";

export default {
  install(app) {
    app.component('Skeleton', Skeleton);
    app.component('InputGroup', InputGroup);
  }
};