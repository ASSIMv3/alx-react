import { fromJS } from 'mmutable';

export default function getImmutableObject(object) {
  return fromJS(object);
}
