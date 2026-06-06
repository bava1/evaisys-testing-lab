import type { DocumentationDocument } from "../../types";
import { tc001LoginValidCredentialsDocument } from "./tc-001-login-valid-credentials";
import { tc002LoginInvalidPasswordDocument } from "./tc-002-login-invalid-password";
import { tc003ProtectedRouteWithoutAuthDocument } from "./tc-003-protected-route-without-auth";
import { tc004LogoutFromApplicationDocument } from "./tc-004-logout-from-application";
import { tc005DashboardAfterLoginDocument } from "./tc-005-dashboard-after-login";
import { tc006NavigateToTasksDocument } from "./tc-006-navigate-to-tasks";
import { tc007DisplayTasksListDocument } from "./tc-007-display-tasks-list";
import { tc008CreateTaskDocument } from "./tc-008-create-task";
import { tc009EditTaskDocument } from "./tc-009-edit-task";
import { tc010CompleteTaskDocument } from "./tc-010-complete-task";
import { tc011ReopenTaskDocument } from "./tc-011-reopen-task";
import { tc012DeleteTaskDocument } from "./tc-012-delete-task";
import { tc013FilterTasksByStatusDocument } from "./tc-013-filter-tasks-by-status";
import { tc014NavigateToRequestsDocument } from "./tc-014-navigate-to-requests";
import { tc015DisplayRequestsListDocument } from "./tc-015-display-requests-list";
import { tc016FilterRequestsByStatusDocument } from "./tc-016-filter-requests-by-status";
import { tc017FilterRequestsByPriorityDocument } from "./tc-017-filter-requests-by-priority";
import { tc018ViewRequestDetailsDocument } from "./tc-018-view-request-details";
import { tc019ChangeRequestStatusDocument } from "./tc-019-change-request-status";
import { tc020NavigateToArticlesDocument } from "./tc-020-navigate-to-articles";

export const testCaseRegistry: Record<string, DocumentationDocument> = {
  "tc-001": tc001LoginValidCredentialsDocument,
  "tc-002": tc002LoginInvalidPasswordDocument,
  "tc-003": tc003ProtectedRouteWithoutAuthDocument,
  "tc-004": tc004LogoutFromApplicationDocument,
  "tc-005": tc005DashboardAfterLoginDocument,
  "tc-006": tc006NavigateToTasksDocument,
  "tc-007": tc007DisplayTasksListDocument,
  "tc-008": tc008CreateTaskDocument,
  "tc-009": tc009EditTaskDocument,
  "tc-010": tc010CompleteTaskDocument,
  "tc-011": tc011ReopenTaskDocument,
  "tc-012": tc012DeleteTaskDocument,
  "tc-013": tc013FilterTasksByStatusDocument,
  "tc-014": tc014NavigateToRequestsDocument,
  "tc-015": tc015DisplayRequestsListDocument,
  "tc-016": tc016FilterRequestsByStatusDocument,
  "tc-017": tc017FilterRequestsByPriorityDocument,
  "tc-018": tc018ViewRequestDetailsDocument,
  "tc-019": tc019ChangeRequestStatusDocument,
  "tc-020": tc020NavigateToArticlesDocument,
};
