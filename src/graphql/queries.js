/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      phoneNumber
      favoriteCareWorkers {
        items {
          id
          name
          image
          isAuthenticated
          yearOfExperience
          hoursWorked
          cost
          location
          latitude
          longitude
          starReview
          createdAt
          updatedAt
          userFavoriteCareWorkersId
          careWorkerApplicationId
          __typename
        }
        nextToken
        __typename
      }
      reservations {
        items {
          id
          time
          createdAt
          updatedAt
          userReservationsId
          careWorkerMissionsId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        phoneNumber
        favoriteCareWorkers {
          nextToken
          __typename
        }
        reservations {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCareWorker = /* GraphQL */ `
  query GetCareWorker($id: ID!) {
    getCareWorker(id: $id) {
      id
      name
      image
      isAuthenticated
      yearOfExperience
      hoursWorked
      cost
      location
      latitude
      longitude
      starReview
      missions {
        items {
          id
          time
          createdAt
          updatedAt
          userReservationsId
          careWorkerMissionsId
          __typename
        }
        nextToken
        __typename
      }
      application {
        id
        careWorker {
          id
          name
          image
          isAuthenticated
          yearOfExperience
          hoursWorked
          cost
          location
          latitude
          longitude
          starReview
          createdAt
          updatedAt
          userFavoriteCareWorkersId
          careWorkerApplicationId
          __typename
        }
        status
        createdAt
        updatedAt
        staffApplicationsToReviewId
        applicationCareWorkerId
        __typename
      }
      createdAt
      updatedAt
      userFavoriteCareWorkersId
      careWorkerApplicationId
      __typename
    }
  }
`;
export const listCareWorkers = /* GraphQL */ `
  query ListCareWorkers(
    $filter: ModelCareWorkerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCareWorkers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        image
        isAuthenticated
        yearOfExperience
        hoursWorked
        cost
        location
        latitude
        longitude
        starReview
        missions {
          nextToken
          __typename
        }
        application {
          id
          status
          createdAt
          updatedAt
          staffApplicationsToReviewId
          applicationCareWorkerId
          __typename
        }
        createdAt
        updatedAt
        userFavoriteCareWorkersId
        careWorkerApplicationId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStaff = /* GraphQL */ `
  query GetStaff($id: ID!) {
    getStaff(id: $id) {
      id
      name
      phoneNumber
      applicationsToReview {
        items {
          id
          status
          createdAt
          updatedAt
          staffApplicationsToReviewId
          applicationCareWorkerId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listStaff = /* GraphQL */ `
  query ListStaff(
    $filter: ModelStaffFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStaff(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        phoneNumber
        applicationsToReview {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getReservation = /* GraphQL */ `
  query GetReservation($id: ID!) {
    getReservation(id: $id) {
      id
      user {
        id
        name
        phoneNumber
        favoriteCareWorkers {
          nextToken
          __typename
        }
        reservations {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      careWorker {
        id
        name
        image
        isAuthenticated
        yearOfExperience
        hoursWorked
        cost
        location
        latitude
        longitude
        starReview
        missions {
          nextToken
          __typename
        }
        application {
          id
          status
          createdAt
          updatedAt
          staffApplicationsToReviewId
          applicationCareWorkerId
          __typename
        }
        createdAt
        updatedAt
        userFavoriteCareWorkersId
        careWorkerApplicationId
        __typename
      }
      time
      createdAt
      updatedAt
      userReservationsId
      careWorkerMissionsId
      __typename
    }
  }
`;
export const listReservations = /* GraphQL */ `
  query ListReservations(
    $filter: ModelReservationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReservations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user {
          id
          name
          phoneNumber
          createdAt
          updatedAt
          __typename
        }
        careWorker {
          id
          name
          image
          isAuthenticated
          yearOfExperience
          hoursWorked
          cost
          location
          latitude
          longitude
          starReview
          createdAt
          updatedAt
          userFavoriteCareWorkersId
          careWorkerApplicationId
          __typename
        }
        time
        createdAt
        updatedAt
        userReservationsId
        careWorkerMissionsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getApplication = /* GraphQL */ `
  query GetApplication($id: ID!) {
    getApplication(id: $id) {
      id
      careWorker {
        id
        name
        image
        isAuthenticated
        yearOfExperience
        hoursWorked
        cost
        location
        latitude
        longitude
        starReview
        missions {
          nextToken
          __typename
        }
        application {
          id
          status
          createdAt
          updatedAt
          staffApplicationsToReviewId
          applicationCareWorkerId
          __typename
        }
        createdAt
        updatedAt
        userFavoriteCareWorkersId
        careWorkerApplicationId
        __typename
      }
      status
      createdAt
      updatedAt
      staffApplicationsToReviewId
      applicationCareWorkerId
      __typename
    }
  }
`;
export const listApplications = /* GraphQL */ `
  query ListApplications(
    $filter: ModelApplicationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listApplications(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        careWorker {
          id
          name
          image
          isAuthenticated
          yearOfExperience
          hoursWorked
          cost
          location
          latitude
          longitude
          starReview
          createdAt
          updatedAt
          userFavoriteCareWorkersId
          careWorkerApplicationId
          __typename
        }
        status
        createdAt
        updatedAt
        staffApplicationsToReviewId
        applicationCareWorkerId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
