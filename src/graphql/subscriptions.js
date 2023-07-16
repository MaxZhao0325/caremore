/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateCareWorker = /* GraphQL */ `
  subscription OnCreateCareWorker(
    $filter: ModelSubscriptionCareWorkerFilterInput
  ) {
    onCreateCareWorker(filter: $filter) {
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
export const onUpdateCareWorker = /* GraphQL */ `
  subscription OnUpdateCareWorker(
    $filter: ModelSubscriptionCareWorkerFilterInput
  ) {
    onUpdateCareWorker(filter: $filter) {
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
export const onDeleteCareWorker = /* GraphQL */ `
  subscription OnDeleteCareWorker(
    $filter: ModelSubscriptionCareWorkerFilterInput
  ) {
    onDeleteCareWorker(filter: $filter) {
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
export const onCreateStaff = /* GraphQL */ `
  subscription OnCreateStaff($filter: ModelSubscriptionStaffFilterInput) {
    onCreateStaff(filter: $filter) {
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
export const onUpdateStaff = /* GraphQL */ `
  subscription OnUpdateStaff($filter: ModelSubscriptionStaffFilterInput) {
    onUpdateStaff(filter: $filter) {
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
export const onDeleteStaff = /* GraphQL */ `
  subscription OnDeleteStaff($filter: ModelSubscriptionStaffFilterInput) {
    onDeleteStaff(filter: $filter) {
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
export const onCreateReservation = /* GraphQL */ `
  subscription OnCreateReservation(
    $filter: ModelSubscriptionReservationFilterInput
  ) {
    onCreateReservation(filter: $filter) {
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
export const onUpdateReservation = /* GraphQL */ `
  subscription OnUpdateReservation(
    $filter: ModelSubscriptionReservationFilterInput
  ) {
    onUpdateReservation(filter: $filter) {
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
export const onDeleteReservation = /* GraphQL */ `
  subscription OnDeleteReservation(
    $filter: ModelSubscriptionReservationFilterInput
  ) {
    onDeleteReservation(filter: $filter) {
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
export const onCreateApplication = /* GraphQL */ `
  subscription OnCreateApplication(
    $filter: ModelSubscriptionApplicationFilterInput
  ) {
    onCreateApplication(filter: $filter) {
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
export const onUpdateApplication = /* GraphQL */ `
  subscription OnUpdateApplication(
    $filter: ModelSubscriptionApplicationFilterInput
  ) {
    onUpdateApplication(filter: $filter) {
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
export const onDeleteApplication = /* GraphQL */ `
  subscription OnDeleteApplication(
    $filter: ModelSubscriptionApplicationFilterInput
  ) {
    onDeleteApplication(filter: $filter) {
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
