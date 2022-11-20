import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  IonContent,
  IonPage,
  IonItem,
  IonRange,
  IonLabel,
  IonButton,
  IonSelect,
  IonSelectOption,
  IonInput,
  IonRadio,
  IonRadioGroup,
  IonListHeader,
  IonHeader
} from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

let renderCount = 0;
let initialValues = {
  rangeInfo: -100,
  fullName: "",
  gender: "",
  techCos: "",
  email: ""
};
const InputFormComp: React.FC = () => {
  const { control, handleSubmit, formState, reset } = useForm({
    defaultValues: { ...initialValues },
    mode: "onChange"
  });

  const [data, setData] = useState();
  renderCount++;

  /**
   *
   * @param _fieldName
   */
  const showError = _fieldName => {
    return (
      (
        <div
          style={{
            color: "red",
            padding: 5,
            paddingLeft: 12,
            fontSize: "smaller"
          }}
        >
          {_fieldName}: {errors[_fieldName].message || "This field is required"}
        </div>
      )
    );
  };

  /**
   *
   * @param data
   */
  const onSubmit = data => {
    alert(JSON.stringify(data, null, 2));
    setData(data);
  };

  
  return (
    <IonPage>
      <IonHeader>
        <h2>React Hook Form work with Ionic Components</h2>
      </IonHeader>

      <IonContent>
        <form onSubmit={handleSubmit(onSubmit)} style={{ padding: 18 }}>
          <span className="counter">Render Count: {renderCount}</span>

          <IonItem>
            <IonLabel>Name - IonInput</IonLabel>
            <Controller
              as={IonInput}
              control={control}
              onChangeName="onIonChange"
              onChange={([selected]) => {
                console.log("fullName", selected.detail.value);
                return selected.detail.value;
              }}
              name="fullName"
              rules={{
                required: true,
                minLength: { value: 4, message: "Must be 4 chars long" }
              }}
            />
          </IonItem>
          {showError("fullName")}

          <IonItem>
            <IonLabel>Email</IonLabel>
            <Controller
              as={IonInput}
              control={control}
              onChangeName="onIonChange"
              onChange={([selected]) => {
                return selected.detail.value;
              }}
              name="email"
              rules={{
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "invalid email address"
                }
              }}
            />
          </IonItem>
          {showError("email")}
          <Controller
            as={
              <IonRadioGroup>
                <IonListHeader>
                  <IonLabel>
                    <h1>Manufacturers</h1>
                  </IonLabel>
                </IonListHeader>
                <IonItem>
                  <IonLabel>Apple</IonLabel>
                  <IonRadio value="apple" />
                </IonItem>
                <IonItem>
                  <IonLabel>Amazon</IonLabel>
                  <IonRadio value="amazon" />
                </IonItem>
                <IonItem>
                  <IonLabel>Microsoft</IonLabel>
                  <IonRadio value="microsoft" />
                </IonItem>
              </IonRadioGroup>
            }
            control={control}
            name="techCos"
            rules={{ required: true }}
            onChangeName="onIonChange"
            onChange={([selected]) => {
              console.log(selected.detail.value);
              return selected.detail.value;
            }}
          />

          <IonItem>
            <IonLabel>Gender</IonLabel>
            <Controller
              as={
                <IonSelect placeholder="Select One">
                  <IonSelectOption value="FEMALE">Female</IonSelectOption>
                  <IonSelectOption value="MALE">Male</IonSelectOption>
                </IonSelect>
              }
              control={control}
              onChangeName="onIonChange"
              onChange={([selected]) => {
                console.log(selected.detail.value);
                return selected.detail.value;
              }}
              name="gender"
              rules={{ required: true }}
            />
          </IonItem>

          <IonItem>
            <Controller
              as={
                <IonRange min={-200} max={200} color="secondary">
                  <IonLabel slot="start">-200</IonLabel>
                  <IonLabel slot="end">200</IonLabel>
                </IonRange>
              }
              control={control}
              name="rangeInfo"
              onChangeName="onIonChange"
              onChange={([selected]) => {
                console.log(selected.detail.value);
                return selected.detail.value;
              }}
              rules={{ required: true }}
            />
          </IonItem>
          <IonItem>
            <IonLabel>
              formState.isValid: {(formState.isValid === true).toString()}
            </IonLabel>
          </IonItem>
          {data && (
            <pre style={{ textAlign: "left" }}>
              {JSON.stringify(data, null, 2)}
            </pre>
          )}

          <IonButton
            type="button"
            onClick={() => {
              reset(initialValues);
            }}
          >
            Reset Form
          </IonButton>
          <IonButton type="submit" disabled={formState.isValid === false}>
            submit
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
}

export default InputFormComp