import http from 'k6/http';
import { check } from 'k6';

export default function () {
  console.log("Hello i am running")
  const title= 'Load Impact is now k6';
  check('Load Impact is now k6', {
    'has correct title': () => title == 'Load Impact is now k6',
  });
}
