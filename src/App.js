import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import PrismaZoom from 'react-prismazoom'
import PinchToZoom from 'react-pinch-and-zoom';
import usePanZoom from "use-pan-and-zoom";

// usePanZoom
const Demo = () => {
  const {
    transform,
    panZoomHandlers,
    setContainer,
    setPan,
    setZoom
  } = usePanZoom({});
 
  return (
    <div ref={el => setContainer(el)} {...panZoomHandlers}>
      <div style={{ transform }}>
        {/* <p>Drag to 👆and scroll / pinch to 🔎 me!</p> */}
        <img src="photo.jpg" />
      </div>
    </div>
  );
};

function App() {
  const centerContent = true;
  const dbClickEnabled = true;
  const disabled = false;
  const enableWheel = false;
  const enableTouchPadPinch = true;
  const enableVelocity = true;
  const limitToBounds = true;
  const limitToWrapper = false;
  const limitsOnWheel = false;
  const lockAxisX = false;
  const lockAxisY = false;
  const panningEnabled = true;
  const pinchEnabled = true;
  const transformEnabled = true;
  const velocityEqualToMove = true;

  const [isPortrait, setIsPortrait] = useState(true);

  const src = isPortrait ? '/photo-portrait.jpg' : '/photo-landscape.jpg';

  return (
    <div className="App">
      {/* <div className="x">
        <PinchToZoom>
          <img src="photo.jpg" />
        </PinchToZoom>
      </div> */}
      {/* <Demo /> */}
      {/* <div className="x">
        <PrismaZoom maxZoom="3">
          <img src="photo.jpg" />
          <p>A text that can be zoomed and dragged</p>
        </PrismaZoom>
      </div> */}

      {/* <div className="a">
        <TransformWrapper
          // defaultPositionX={50}
          // defaultPositionY={50}
          defaultScale={0.5}
          options={{
            limitToBounds: false,
            limitToWrapper: true,
            // centerContent: false
          }}
        >
          {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
            <>
              <div className="tools">
                <button onClick={zoomIn}>+</button>
                <button onClick={zoomOut}>-</button>
                <button onClick={resetTransform}>x</button>
              </div>
              <TransformComponent>
                <div className="b">
                  <img src="/photo.jpg" alt="" className="img" />
                </div>
              </TransformComponent>
            </>
          )}
        </TransformWrapper>
      </div> */}
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12 order-lg-2 example">
                <TransformWrapper
                  options={{
                    centerContent,
                    disabled,
                    limitToBounds,
                    limitToWrapper,
                    transformEnabled,
                  }}
                  pan={{
                    disabled: !panningEnabled,
                    lockAxisX,
                    lockAxisY,
                    velocityEqualToMove,
                    velocity: enableVelocity,
                  }}
                  pinch={{ disabled: !pinchEnabled }}
                  doubleClick={{ disabled: !dbClickEnabled }}
                  wheel={{
                    wheelEnabled: enableWheel,
                    touchPadEnabled: enableTouchPadPinch,
                    limitsOnWheel,
                  }}
                >
                  {({
                    zoomIn,
                    zoomOut,
                    resetTransform,
                    setDefaultState,
                    positionX,
                    positionY,
                    scale,
                    previousScale,
                    options: { limitToBounds, transformEnabled, disabled },
                    ...rest
                  }) => (
                    <React.Fragment>
                      <div className="tools">
                        <button
                          className="btn-gradient yellow small btn-type"
                          data-testid="toggle-button"
                          onClick={() => {
                            setIsPortrait(!isPortrait);
                            resetTransform();
                          }}
                        >
                          {isPortrait ? "Set landscape" : "Set portrait"}
                        </button>
                        <div className="spacer" />
                        <button
                          className="btn-gradient cyan small"
                          onClick={zoomIn}
                          data-testid="zoom-in-button"
                        >
                          zoom in
                        </button>
                        <button
                          className="btn-gradient blue small"
                          onClick={zoomOut}
                          data-testid="zoom-out-button"
                        >
                          zoom out
                        </button>
                        <button
                          className="btn-gradient purple small"
                          onClick={resetTransform}
                          data-testid="reset-button"
                        >
                          reset
                        </button>
                      </div>
                      <div className="element">
                        <TransformComponent>
                          <img
                            className="zoom"
                            src={src}
                            alt="example-element"
                          />
                        </TransformComponent>
                      </div>
                      <div className="info">
                        <h3>State</h3>
                        <h5>
                          <span className="badge badge-secondary">
                            Position x : {positionX}px
                          </span>
                          <span className="badge badge-secondary">
                            Position y : {positionY}px
                          </span>
                          <span className="badge badge-secondary">
                            Scale : {scale}
                          </span>
                          <span className="badge badge-secondary">
                            Previous scale : {previousScale}
                          </span>
                        </h5>
                      </div>
                      {/* <div className="functions">
                        <h3>Functions</h3>
                        <button
                          className={
                            "btn-gradient grey small" +
                            (disabled ? " active" : "")
                          }
                          onClick={() => this.toggleSetting("disabled")}
                        >
                          <span /> Disable
                        </button>
                        <button
                          className={
                            "btn-gradient grey small" +
                            (limitToBounds ? " active" : "")
                          }
                          onClick={() => this.toggleSetting("limitToBounds")}
                        >
                          <span /> Limit bounds
                        </button>
                        <button
                          className={
                            "btn-gradient grey small" +
                            (limitToWrapper ? " active" : "")
                          }
                          onClick={() => this.toggleSetting("limitToWrapper")}
                        >
                          <span /> Limit to wrapper bounds
                        </button>
                        <button
                          className={
                            "btn-gradient grey small" +
                            (!rest.pan.disabled ? " active" : "")
                          }
                          onClick={() => this.toggleSetting("panningEnabled")}
                        >
                          <span /> Enable panning
                        </button>
                        <button
                          className={
                            "btn-gradient grey small" +
                            (!rest.pinch.disabled ? " active" : "")
                          }
                          onClick={() => this.toggleSetting("pinchEnabled")}
                        >
                          <span /> Enable pinch
                        </button>
                        <button
                          className={
                            "btn-gradient grey small" +
                            (transformEnabled ? " active" : "")
                          }
                          onClick={() =>
                            this.toggleSetting("transformEnabled")
                          }
                        >
                          <span /> Enable transform
                        </button>
                        <button
                          className={
                            "btn-gradient grey small" +
                            (!rest.doubleClick.disabled ? " active" : "")
                          }
                          onClick={() => this.toggleSetting("dbClickEnabled")}
                        >
                          <span /> Double click
                        </button>
                        <button
                          className={
                            "btn-gradient grey small" +
                            (rest.pan.lockAxisX ? " active" : "")
                          }
                          onClick={() => this.toggleSetting("lockAxisX")}
                        >
                          <span /> Lock X axis
                        </button>
                        <button
                          className={
                            "btn-gradient grey small" +
                            (rest.pan.lockAxisY ? " active" : "")
                          }
                          onClick={() => this.toggleSetting("lockAxisY")}
                        >
                          <span /> Lock Y axis
                        </button>
                        <button
                          className={
                            "btn-gradient grey small" +
                            (rest.pan.velocityEqualToMove ? " active" : "")
                          }
                          onClick={() =>
                            this.toggleSetting("velocityEqualToMove")
                          }
                        >
                          <span /> Velocity time based on move
                        </button>
                        <button
                          className={
                            "btn-gradient grey small" +
                            (rest.pan.velocity ? " active" : "")
                          }
                          onClick={() => this.toggleSetting("enableVelocity")}
                        >
                          <span /> Enable velocity
                        </button>
                        <button
                          className={
                            "btn-gradient grey small" +
                            (rest.wheel.wheelEnabled ? " active" : "")
                          }
                          onClick={() => this.toggleSetting("enableWheel")}
                        >
                          <span /> Enable wheel
                        </button>
                        <button
                          className={
                            "btn-gradient grey small" +
                            (rest.wheel.touchPadEnabled ? " active" : "")
                          }
                          onClick={() =>
                            this.toggleSetting("enableTouchPadPinch")
                          }
                        >
                          <span /> Enable touch pad pinch
                        </button>
                        <button
                          className={
                            "btn-gradient grey small" +
                            (rest.wheel.limitsOnWheel ? " active" : "")
                          }
                          onClick={() => this.toggleSetting("limitsOnWheel")}
                        >
                          <span /> Bound limits on wheel
                        </button>
                      </div> */}
                    </React.Fragment>
                  )}
                </TransformWrapper>
              </div>
            </div>
          </div>
    </div>
  );
}

export default App;
