import { Skeleton } from "@/components/ui/skeleton";
import { InputGroup } from "@/components/ui/input-group";
import { Button } from "@/components/ui/button";

export default {
  install(app) {
    app.component('Skeleton', Skeleton);
    app.component('InputGroup', InputGroup);
    app.component('Button', Button);
  }
};