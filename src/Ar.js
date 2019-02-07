import React, { useState, useReducer, useEffect } from "react";
import viewarApi from "viewar-api";
import MaterialSelector from "./MaterialSelector";
import styled from "styled-components";
import phonePortraitPath from "../assets/tracking_animation_phone_portrait.gif";

const TrackingHint = styled.div`
  pointer-events: none;
  height: 100%;
  width: 100%;
  background: url(${phonePortraitPath}) 50% no-repeat;
  background-size: 200px 100px;
`;

const useForceUpdate = () => useReducer(state => state + 1, 0)[1];

export default function Ar(props) {
  const forceUpdate = useForceUpdate();
  const [chair, setChair] = useState(null);

  useEffect(() => {
    async function onTrackingChanges(evt) {
      if (!evt.tracked) return false;
      const chairModel = await viewarApi.modelManager.fetchModelFromRepository(
        "65343"
      );
      const pose = await viewarApi.cameras.arCamera.getPoseInViewingDirection(
        1800,
        true
      );
      const chair = await viewarApi.sceneManager.insertModel(chairModel, {
        pose
      });
      setChair(chair);
    }

    async function activateTracking() {
      await viewarApi.cameras.arCamera.activate();
      viewarApi.tracker.on("trackingTargetStatusChanged", onTrackingChanges);
      await viewarApi.tracker.activate();
    }

    activateTracking();
  }, []);

  async function updateMaterial(key, value) {
    await chair.setPropertyValues({ [key]: value });
    forceUpdate();
  }

  if (!chair) return <TrackingHint />;

  return (
    <MaterialSelector
      materials={chair.properties}
      onUpdateMaterial={updateMaterial}
    />
  );
}
