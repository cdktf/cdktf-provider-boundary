// https://www.terraform.io/docs/providers/boundary/r/auth_method_oidc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthMethodOidcConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account claim maps for the to_claim of sub.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/auth_method_oidc#account_claim_maps AuthMethodOidc#account_claim_maps}
  */
  readonly accountClaimMaps?: string[];
  /**
  * Audiences for which the provider responses will be allowed
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/auth_method_oidc#allowed_audiences AuthMethodOidc#allowed_audiences}
  */
  readonly allowedAudiences?: string[];
  /**
  * The API prefix to use when generating callback URLs for the provider. Should be set to an address at which the provider can reach back to the controller.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/auth_method_oidc#api_url_prefix AuthMethodOidc#api_url_prefix}
  */
  readonly apiUrlPrefix?: string;
  /**
  * The URL that should be provided to the IdP for callbacks.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/auth_method_oidc#callback_url AuthMethodOidc#callback_url}
  */
  readonly callbackUrl?: string;
  /**
  * Claims scopes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/auth_method_oidc#claims_scopes AuthMethodOidc#claims_scopes}
  */
  readonly claimsScopes?: string[];
  /**
  * The client ID assigned to this auth method from the provider.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/auth_method_oidc#client_id AuthMethodOidc#client_id}
  */
  readonly clientId?: string;
  /**
  * The secret key assigned to this auth method from the provider. Once set, only the hash will be kept and the original value can be removed from configuration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/auth_method_oidc#client_secret AuthMethodOidc#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * The HMAC of the client secret returned by the Boundary controller, which is used for comparison after initial setting of the value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/auth_method_oidc#client_secret_hmac AuthMethodOidc#client_secret_hmac}
  */
  readonly clientSecretHmac?: string;
  /**
  * The auth method description.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/auth_method_oidc#description AuthMethodOidc#description}
  */
  readonly description?: string;
  /**
  * Disables validation logic ensuring that the OIDC provider's information from its discovery endpoint matches the information here. The validation is only performed at create or update time.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/auth_method_oidc#disable_discovered_config_validation AuthMethodOidc#disable_discovered_config_validation}
  */
  readonly disableDiscoveredConfigValidation?: boolean | cdktf.IResolvable;
  /**
  * A list of CA certificates to trust when validating the IdP's token signatures.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/auth_method_oidc#idp_ca_certs AuthMethodOidc#idp_ca_certs}
  */
  readonly idpCaCerts?: string[];
  /**
  * When true, makes this auth method the primary auth method for the scope in which it resides. The primary auth method for a scope means the the user will be automatically created when they login using an OIDC account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/auth_method_oidc#is_primary_for_scope AuthMethodOidc#is_primary_for_scope}
  */
  readonly isPrimaryForScope?: boolean | cdktf.IResolvable;
  /**
  * The issuer corresponding to the provider, which must match the issuer field in generated tokens.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/auth_method_oidc#issuer AuthMethodOidc#issuer}
  */
  readonly issuer?: string;
  /**
  * The max age to provide to the provider, indicating how much time is allowed to have passed since the last authentication before the user is challenged again.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/auth_method_oidc#max_age AuthMethodOidc#max_age}
  */
  readonly maxAge?: number;
  /**
  * The auth method name. Defaults to the resource name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/auth_method_oidc#name AuthMethodOidc#name}
  */
  readonly name?: string;
  /**
  * The scope ID.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/auth_method_oidc#scope_id AuthMethodOidc#scope_id}
  */
  readonly scopeId: string;
  /**
  * Allowed signing algorithms for the provider's issued tokens.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/auth_method_oidc#signing_algorithms AuthMethodOidc#signing_algorithms}
  */
  readonly signingAlgorithms?: string[];
  /**
  * Can be one of 'inactive', 'active-private', or 'active-public'. Currently automatically set to active-public.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/auth_method_oidc#state AuthMethodOidc#state}
  */
  readonly state?: string;
  /**
  * The type of auth method; hardcoded.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/auth_method_oidc#type AuthMethodOidc#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/boundary/r/auth_method_oidc boundary_auth_method_oidc}
*/
export class AuthMethodOidc extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "boundary_auth_method_oidc";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/boundary/r/auth_method_oidc boundary_auth_method_oidc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthMethodOidcConfig
  */
  public constructor(scope: Construct, id: string, config: AuthMethodOidcConfig) {
    super(scope, id, {
      terraformResourceType: 'boundary_auth_method_oidc',
      terraformGeneratorMetadata: {
        providerName: 'boundary',
        providerVersion: '1.1.2',
        providerVersionConstraint: '~> 1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountClaimMaps = config.accountClaimMaps;
    this._allowedAudiences = config.allowedAudiences;
    this._apiUrlPrefix = config.apiUrlPrefix;
    this._callbackUrl = config.callbackUrl;
    this._claimsScopes = config.claimsScopes;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._clientSecretHmac = config.clientSecretHmac;
    this._description = config.description;
    this._disableDiscoveredConfigValidation = config.disableDiscoveredConfigValidation;
    this._idpCaCerts = config.idpCaCerts;
    this._isPrimaryForScope = config.isPrimaryForScope;
    this._issuer = config.issuer;
    this._maxAge = config.maxAge;
    this._name = config.name;
    this._scopeId = config.scopeId;
    this._signingAlgorithms = config.signingAlgorithms;
    this._state = config.state;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_claim_maps - computed: false, optional: true, required: false
  private _accountClaimMaps?: string[]; 
  public get accountClaimMaps() {
    return this.getListAttribute('account_claim_maps');
  }
  public set accountClaimMaps(value: string[]) {
    this._accountClaimMaps = value;
  }
  public resetAccountClaimMaps() {
    this._accountClaimMaps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountClaimMapsInput() {
    return this._accountClaimMaps;
  }

  // allowed_audiences - computed: false, optional: true, required: false
  private _allowedAudiences?: string[]; 
  public get allowedAudiences() {
    return this.getListAttribute('allowed_audiences');
  }
  public set allowedAudiences(value: string[]) {
    this._allowedAudiences = value;
  }
  public resetAllowedAudiences() {
    this._allowedAudiences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAudiencesInput() {
    return this._allowedAudiences;
  }

  // api_url_prefix - computed: false, optional: true, required: false
  private _apiUrlPrefix?: string; 
  public get apiUrlPrefix() {
    return this.getStringAttribute('api_url_prefix');
  }
  public set apiUrlPrefix(value: string) {
    this._apiUrlPrefix = value;
  }
  public resetApiUrlPrefix() {
    this._apiUrlPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUrlPrefixInput() {
    return this._apiUrlPrefix;
  }

  // callback_url - computed: true, optional: true, required: false
  private _callbackUrl?: string; 
  public get callbackUrl() {
    return this.getStringAttribute('callback_url');
  }
  public set callbackUrl(value: string) {
    this._callbackUrl = value;
  }
  public resetCallbackUrl() {
    this._callbackUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callbackUrlInput() {
    return this._callbackUrl;
  }

  // claims_scopes - computed: false, optional: true, required: false
  private _claimsScopes?: string[]; 
  public get claimsScopes() {
    return this.getListAttribute('claims_scopes');
  }
  public set claimsScopes(value: string[]) {
    this._claimsScopes = value;
  }
  public resetClaimsScopes() {
    this._claimsScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsScopesInput() {
    return this._claimsScopes;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // client_secret_hmac - computed: true, optional: true, required: false
  private _clientSecretHmac?: string; 
  public get clientSecretHmac() {
    return this.getStringAttribute('client_secret_hmac');
  }
  public set clientSecretHmac(value: string) {
    this._clientSecretHmac = value;
  }
  public resetClientSecretHmac() {
    this._clientSecretHmac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretHmacInput() {
    return this._clientSecretHmac;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // disable_discovered_config_validation - computed: false, optional: true, required: false
  private _disableDiscoveredConfigValidation?: boolean | cdktf.IResolvable; 
  public get disableDiscoveredConfigValidation() {
    return this.getBooleanAttribute('disable_discovered_config_validation');
  }
  public set disableDiscoveredConfigValidation(value: boolean | cdktf.IResolvable) {
    this._disableDiscoveredConfigValidation = value;
  }
  public resetDisableDiscoveredConfigValidation() {
    this._disableDiscoveredConfigValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableDiscoveredConfigValidationInput() {
    return this._disableDiscoveredConfigValidation;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idp_ca_certs - computed: false, optional: true, required: false
  private _idpCaCerts?: string[]; 
  public get idpCaCerts() {
    return this.getListAttribute('idp_ca_certs');
  }
  public set idpCaCerts(value: string[]) {
    this._idpCaCerts = value;
  }
  public resetIdpCaCerts() {
    this._idpCaCerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpCaCertsInput() {
    return this._idpCaCerts;
  }

  // is_primary_for_scope - computed: false, optional: true, required: false
  private _isPrimaryForScope?: boolean | cdktf.IResolvable; 
  public get isPrimaryForScope() {
    return this.getBooleanAttribute('is_primary_for_scope');
  }
  public set isPrimaryForScope(value: boolean | cdktf.IResolvable) {
    this._isPrimaryForScope = value;
  }
  public resetIsPrimaryForScope() {
    this._isPrimaryForScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPrimaryForScopeInput() {
    return this._isPrimaryForScope;
  }

  // issuer - computed: false, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // max_age - computed: false, optional: true, required: false
  private _maxAge?: number; 
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }
  public set maxAge(value: number) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // scope_id - computed: false, optional: false, required: true
  private _scopeId?: string; 
  public get scopeId() {
    return this.getStringAttribute('scope_id');
  }
  public set scopeId(value: string) {
    this._scopeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeIdInput() {
    return this._scopeId;
  }

  // signing_algorithms - computed: false, optional: true, required: false
  private _signingAlgorithms?: string[]; 
  public get signingAlgorithms() {
    return this.getListAttribute('signing_algorithms');
  }
  public set signingAlgorithms(value: string[]) {
    this._signingAlgorithms = value;
  }
  public resetSigningAlgorithms() {
    this._signingAlgorithms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingAlgorithmsInput() {
    return this._signingAlgorithms;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_claim_maps: cdktf.listMapper(cdktf.stringToTerraform, false)(this._accountClaimMaps),
      allowed_audiences: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedAudiences),
      api_url_prefix: cdktf.stringToTerraform(this._apiUrlPrefix),
      callback_url: cdktf.stringToTerraform(this._callbackUrl),
      claims_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._claimsScopes),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      client_secret_hmac: cdktf.stringToTerraform(this._clientSecretHmac),
      description: cdktf.stringToTerraform(this._description),
      disable_discovered_config_validation: cdktf.booleanToTerraform(this._disableDiscoveredConfigValidation),
      idp_ca_certs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._idpCaCerts),
      is_primary_for_scope: cdktf.booleanToTerraform(this._isPrimaryForScope),
      issuer: cdktf.stringToTerraform(this._issuer),
      max_age: cdktf.numberToTerraform(this._maxAge),
      name: cdktf.stringToTerraform(this._name),
      scope_id: cdktf.stringToTerraform(this._scopeId),
      signing_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(this._signingAlgorithms),
      state: cdktf.stringToTerraform(this._state),
      type: cdktf.stringToTerraform(this._type),
    };
  }
}
