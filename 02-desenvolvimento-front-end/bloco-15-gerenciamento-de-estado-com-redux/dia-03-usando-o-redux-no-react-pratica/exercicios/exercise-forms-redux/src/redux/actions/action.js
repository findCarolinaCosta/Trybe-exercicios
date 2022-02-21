export const STATE_PERSONALFORM = 'STATE_PERSONALFORM';
export const STATE_PROFESSIONAL = 'STATE_PROFESSIONAL';

export const saveStatePersonalForm = (state) => ({
  type: STATE_PERSONALFORM,
  payload: {
    personalForm: state,
  },
});

export const saveStateProfessional = (state) => ({
  type: STATE_PROFESSIONAL,
  payload: {
    professional: state,
  },
});
