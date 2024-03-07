"use strict";(globalThis.webpackChunk_openmrs_esm_patient_chart_app=globalThis.webpackChunk_openmrs_esm_patient_chart_app||[]).push([[205],{9533:(e,n,t)=>{t.d(n,{Z:()=>s});var i=t(272),r=t.n(i),o=t(2609),a=t.n(o)()(r());a.push([e.id,".-esm-patient-chart__active-visit-buttons__buttonsContainer___X3wNH{display:flex;gap:.25rem;margin:.25rem}","",{version:3,sources:["webpack://./src/visit/visits-widget/active-visit-buttons/active-visit-buttons.scss","webpack://./../../node_modules/@carbon/layout/scss/generated/_spacing.scss"],names:[],mappings:"AAEA,oEACI,YAAA,CACA,UCYS,CDXT,aCWS",sourceRoot:""}]),a.locals={buttonsContainer:"-esm-patient-chart__active-visit-buttons__buttonsContainer___X3wNH"};const s=a},9205:(e,n,t)=>{t.r(n),t.d(n,{default:()=>y});var i=t(414),r=t(268),o=t.n(r),a=t(321),s=t.n(a),c=t(1195),l=t.n(c),d=t(3275),u=t.n(d),m=t(7162),p=t.n(m),k=t(2094),b=t.n(k),g=t(757),h=t.n(g),v=t(9533),f={};f.styleTagTransform=h(),f.setAttributes=p(),f.insert=u().bind(null,"head"),f.domAPI=l(),f.insertStyleElement=b(),s()(v.Z,f);const C=v.Z&&v.Z.locals?v.Z.locals:void 0;var I=t(4924),E=t(4350),A=t(8871),_=t(2870);function w(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function M(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),i.forEach((function(n){w(e,n,t[n])}))}return e}const y=function(e){e.visit;var n=e.patientUuid,t=(0,I.useTranslation)().t,r=(0,_.useLayoutType)(),a="tablet"===r,s="phone"===r;return o().createElement("div",null,a||s?o().createElement("div",{className:C.buttonsContainer},o().createElement(V,{patientUuid:n}),o().createElement(E.MenuButton,{label:t("more","More"),kind:"ghost"},o().createElement(E.MenuItem,{kind:"ghost",label:t("addNote","Add note"),onClick:(0,i.useLaunchWorkspaceRequiringVisit)("visit-notes-form-workspace"),renderIcon:A.mm}),o().createElement(E.MenuItem,{kind:"ghost",label:t("addLabOrPrescription","Add lab or prescription"),onClick:(0,i.useLaunchWorkspaceRequiringVisit)("order-basket"),renderIcon:A.mm}),o().createElement(E.MenuItem,{kind:"ghost",label:t("addVitals","Add vitals"),onClick:(0,i.useLaunchWorkspaceRequiringVisit)("patient-vitals-biometrics-form-workspace"),renderIcon:A.mm}),o().createElement(E.MenuItem,{kind:"ghost",label:t("addCondition","Add condition"),onClick:(0,i.useLaunchWorkspaceRequiringVisit)("conditions-form-workspace"),renderIcon:A.mm}),o().createElement(E.MenuItem,{kind:"ghost",label:t("addAllergy","Add allergy"),onClick:(0,i.useLaunchWorkspaceRequiringVisit)("patient-allergy-form-workspace"),renderIcon:A.mm}),o().createElement(E.MenuItem,{kind:"ghost",label:t("addAppointment","Add appointment"),onClick:(0,i.useLaunchWorkspaceRequiringVisit)("appointments-form-workspace"),renderIcon:A.mm}),o().createElement(E.MenuItem,{kind:"ghost",label:t("otherForm","Other form"),onClick:(0,i.useLaunchWorkspaceRequiringVisit)("clinical-forms-workspace"),renderIcon:A.mm}))):o().createElement("div",{className:C.buttonsContainer},o().createElement(E.Button,{kind:"ghost",renderIcon:function(e){return o().createElement(A.mm,M({size:16},e))},iconDescription:"Add visit note",onClick:(0,i.useLaunchWorkspaceRequiringVisit)("visit-notes-form-workspace")},t("addNote","Add note")),o().createElement(E.Button,{kind:"ghost",renderIcon:function(e){return o().createElement(A.mm,M({size:16},e))},iconDescription:"Add lab or prescription",onClick:(0,i.useLaunchWorkspaceRequiringVisit)("order-basket")},t("addLabOrPrescription","Add lab or prescription")),o().createElement(V,{patientUuid:n}),o().createElement(E.MenuButton,{label:t("more","More"),kind:"ghost"},o().createElement(E.MenuItem,{kind:"ghost",label:t("addVitals","Add vitals"),onClick:(0,i.useLaunchWorkspaceRequiringVisit)("patient-vitals-biometrics-form-workspace"),renderIcon:A.mm}),o().createElement(E.MenuItem,{kind:"ghost",label:t("addCondition","Add condition"),onClick:(0,i.useLaunchWorkspaceRequiringVisit)("conditions-form-workspace"),renderIcon:A.mm}),o().createElement(E.MenuItem,{kind:"ghost",label:t("addAllergy","Add allergy"),onClick:(0,i.useLaunchWorkspaceRequiringVisit)("patient-allergy-form-workspace"),renderIcon:A.mm}),o().createElement(E.MenuItem,{kind:"ghost",label:t("addAppointment","Add appointment"),onClick:(0,i.useLaunchWorkspaceRequiringVisit)("appointments-form-workspace"),renderIcon:A.mm}),o().createElement(E.MenuItem,{kind:"ghost",label:t("otherForm","Other form"),onClick:(0,i.useLaunchWorkspaceRequiringVisit)("clinical-forms-workspace"),renderIcon:A.mm}))))};var V=function(e){var n=e.patientUuid,t=(0,I.useTranslation)().t,i=(0,r.useCallback)((function(e){var t=(0,_.showModal)(e,{closeModal:function(){return t()},patientUuid:n})}),[n]);return o().createElement(E.MenuButton,{label:t("endVisit","End visit"),kind:"ghost"},o().createElement(E.MenuItem,{kind:"ghost",label:t("endVisit","End visit"),onClick:function(){return i("end-visit-dialog")},renderIcon:A.mm}),o().createElement(E.MenuItem,{kind:"ghost",label:t("cancelVisit","Cancel visit"),onClick:function(){return i("cancel-visit-dialog")},renderIcon:A.mm}),o().createElement(E.MenuItem,{kind:"ghost",label:t("deleteVisit","Delete visit"),onClick:function(){return i("delete-visit-dialog")},renderIcon:A.mm}))}}}]);