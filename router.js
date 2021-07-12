const Authentication = require("./controllers/userAuth");
const News = require("./controllers/news");
const Events = require("./controllers/events");
const RfSwitch = require("./controllers/RfSwitch");
const RfLimiter = require("./controllers/RfLimiter");
const RfSwitchDriver = require("./controllers/RfSwitchDriver");
const FeaturedItems = require("./controllers/FeaturedItems");
const ConnectorizedLimiters = require("./controllers/ConnectorizedLimiters");
const requireAuth = require("./services/requireAuth");

module.exports = function (app) {
  //rfuw admin users
  app.post("/auth/signup", Authentication.rfuwSignup);
  app.post("/auth/signin", Authentication.rfuwSignin);
  app.get("/auth", requireAuth, Authentication.getUser);
  //rfuw news

  app.get("/api/news", News.allNews);
  app.post("/api/news/create", requireAuth, News.addNews);
  app.put("/api/news/:id", requireAuth, News.editNews);
  app.put("/api/news/:id/uploadimage", requireAuth, News.newsImageUpload);
  app.get("/api/news/:id", requireAuth, News.newsById);
  app.delete("/api/news/:id", requireAuth, News.removeNews);

  // rfuw events
  app.get("/api/events", Events.allEvents);
  app.post("/api/events/create", requireAuth, Events.addEvent);
  app.put("/api/events/:id", requireAuth, Events.editEvent);

  // rfu rf switches
  app.post("/api/switches/create", requireAuth, RfSwitch.addSwitch);
  app.get("/api/switches", RfSwitch.allSwitches);
  app.get("/api/switches/:id", RfSwitch.switchById);
  app.put("/api/switches/:id", requireAuth, RfSwitch.switchEdit);
  app.put(
    "/api/switches/:id/uploadimage",
    requireAuth,
    RfSwitch.switchImageUpload
  );
  app.delete("/api/switches/:id", requireAuth, RfSwitch.removeSwitch);
  // rfu rf limiters
  app.post("/api/limiters/create", requireAuth, RfLimiter.addLimiter);
  app.get("/api/limiters", RfLimiter.allLimiters);
  app.get("/api/limiters/:id", RfLimiter.limiterById);
  app.put("/api/limiters/:id", requireAuth, RfLimiter.limiterEdit);
  app.put(
    "/api/limiters/:id/uploadimage",
    requireAuth,
    RfLimiter.limiterImageUpload
  );
  app.delete("/api/limiters/:id", requireAuth, RfLimiter.removeLimiter);

  // rfu Connectorized Limiters
  app.post(
    "/api/colimiters/create",
    requireAuth,
    ConnectorizedLimiters.addConLimiter
  );
  app.get("/api/colimiters", ConnectorizedLimiters.allConLimiters);
  app.get("/api/colimiters/:id", ConnectorizedLimiters.conLimiterById);
  app.put(
    "/api/colimiters/:id",
    requireAuth,
    ConnectorizedLimiters.conLimiterEdit
  );
  app.put(
    "/api/colimiters/:id/uploadimage",
    requireAuth,
    ConnectorizedLimiters.coLimiterImageUpload
  );
  app.delete(
    "/api/colimiters/:id",
    requireAuth,
    ConnectorizedLimiters.removeConLimiter
  );

  // rfu rf switch drivers
  app.post(
    "/api/swdrivers/create",
    requireAuth,
    RfSwitchDriver.addSwitchDriver
  );
  app.get("/api/swdrivers", RfSwitchDriver.allSwDrivers);
  app.get("/api/swdrivers/:id", RfSwitchDriver.swDriverById);
  app.put("/api/swdrivers/:id", requireAuth, RfSwitchDriver.swDriverEdit);
  app.put(
    "/api/swdrivers/:id/uploadimage",
    requireAuth,
    RfSwitchDriver.swDriverImageUpload
  );
  app.delete("/api/swdrivers/:id", requireAuth, RfSwitchDriver.removeSwDriver);

  app.get("/api/featured/items", FeaturedItems.getFeaturedItems);
};
