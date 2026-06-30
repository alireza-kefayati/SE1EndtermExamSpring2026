# Online TV Streaming Service - SE1 Endterm Project

Skeleton codebase implementing a microservices architecture for an online TV
streaming system, matching the architecture and design described in the
theory section of the exam (4+1 view, ER diagram, design patterns).

## Structure
- `STUDENT_ID/` - rename to your actual student ID. Contains the 5
  microservices: user-service, catalog-service, subscription-service,
  streaming-service (Factory, Strategy, Facade patterns),
  recommendation-service (Observer pattern), and shared/db (Singleton pattern).
- `tests/` - unit and acceptance tests (branch `test`).
- `.github/workflows/` - CI (test branch, coverage CSV) and CD (main branch, Docker build).

## Run tests
```
npm install
npm test
npm run coverage:csv
```
