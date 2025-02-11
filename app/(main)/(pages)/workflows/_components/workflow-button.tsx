"use client";
import Workflowform from "@/components/forms/workflow-form";
import CustomModal from "@/components/global/custom-modal";
import { Button } from "@/components/ui/button";
import { useBilling } from "@/provider/billing-provider";
import { useModal } from "@/provider/model_provider";

import { Plus } from "lucide-react";
import React from "react";

const WorkflowButton = () => {
  const { setOpen, setClose } = useModal();
  const { credits } = useBilling();

  const handleClick = () => {
    setOpen(
      <CustomModal
        title="Create a Workflow Automation"
        subheading="Workflows are a powerfull that help you automate tasks."
      >
        <Workflowform />
      </CustomModal>
    );
  };

  return (
    <>
      <Button
        size={"icon"}
        onClick={handleClick}
      >
        <Plus />
      </Button>
      {/* <Button
        size={"icon"}
        {...(credits !== "0"
          ? {
              onClick: handleClick,
            }
          : {
              disabled: true,
            })}
      >
        <Plus />
      </Button> */}
    </>
  );
};

export default WorkflowButton;
