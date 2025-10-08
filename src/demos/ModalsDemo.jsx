import AnimationModalView from "../components/Modals/animation-modal";
import BasicModalView from "../components/Modals/basic-modal";
import ConfirmatioModalView from "../components/Modals/confirmation-modal";
import FormModalView from "../components/Modals/form-modal";
import SizeVariantsModalView from "../components/Modals/size-variants-modal";
import SuccessModalView from "../components/Modals/success-modal";

export default function ModalsDemo() {
  return (
    <>
      {/* <BasicModalView /> */}
      {/* <AnimationModalView /> */}
      {/* <SizeVariantsModalView /> */}
      <FormModalView />
      {/* <ConfirmatioModalView /> */}
      {/* <SuccessModalView /> */}
    </>
  );
}
